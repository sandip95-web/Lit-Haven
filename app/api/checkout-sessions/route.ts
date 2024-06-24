import { NextRequest, NextResponse } from "next/server";


const stripe=require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);


export async function POST(req:NextRequest,res:NextResponse){
    const body=await req.json();
    const{items,email}=body;
    
    const arrangedItem=items.map((item:any)=>({
        price_data:{
            currency:'usd',
            product_data:{
                name:item.bookTitle,
                images:[item.bookImage]
            },
            unit_amount:Math.floor(item.price * 130)
        },
        quantity:1
    }))
    const session= await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        shipping_address_collection:{
            allowed_countries:['GB','US','CA']
        },
        line_items:arrangedItem,
        mode:'payment',
        success_url:`${process.env.HOST}/success`,
        cancel_url:`${process.env.HOST}/checkout`,
        metadata:{
            email,
            images:JSON.stringify(items.map((item:any)=>item.bookImage))
        }
    })
 
    return NextResponse.json({
        id:session.id
    })
    
}