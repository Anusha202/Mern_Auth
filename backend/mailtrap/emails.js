import { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient } from "./mailtrap.config.js"
export const sendVerificationEmail=async(email,verificationToken)=>{
    const recipient=[{email}]

    try{
        const response=await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"verify your email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category:"Email Verification"

        })
        console.log("Email sent successfully",response);
    }catch(error){
        console.error(`error sending verification`,error);

        throw new Error(`error sending verification email:${error}`);

    }
    
};

export const sendWelcomeEmail=async(email,name)=>{
    const recipient=[{email}];
    try{

      const response =  await mailtrapClient.send({
            from:sender,
            to:recipient,
            template_uuid:"57404f6e-cb4f-4614-b4ff-7efc11f1189d",
            template_variables:{
                company_info_name: "Auth Company",
                name: name,


            },

        });
        console.log("Welcome email sent successfully",response);

    }catch(error){
        console.error(`error sending welcome email`,error);

        throw new Error(`Error sending welcome email: ${error}`);

    }
};

export const sendPasswordResetEmail=async(email,resetURL)=>{
    const recipient=[{email}];

    try{
        const response=await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
            category: "Password Reset",
        })

        }catch(error){
            console.error(`error sending password reset email`,error);

        throw new Error(`Error sending password reset email: ${error}`);

    }
}