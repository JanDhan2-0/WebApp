export default {
    getRecords: (bank) => `https://jandhan2.herokuapp.com/account/bank/${bank}/getAll/`,
    login: () => `https://jandhan2.herokuapp.com/authentication/signin/`,
    reviews:(bank,touchpoint) => `https://jandhan2.herokuapp.com/feedback/bank/${bank}/touchPoint/${touchpoint}/reviews`,
    getKYC:(id)=>`https://jandhan2.herokuapp.com/account/bank/SBI/documentOtp/${id}/getData`,
    feedbackChart:(bank)=>`https://jandhan2.herokuapp.com/feedback/bank/${bank}/feedbackChart`,
    missingData:(bank,touchpoint)=>`https://jandhan2.herokuapp.com/missing/bank/${bank}/touchPoint/${touchpoint}/getDetails`,
    requestData:(bank,touchpoint)=>`https://jandhan2.herokuapp.com/request/bank/${bank}/touchPoint/${touchpoint}/getDetails`,
    changeStatus:(bank,id,status)=>`https://jandhan2.herokuapp.com/account/bank/${bank}/documentOtp/${id}/changeStatus/${status}`,
    postUpdate:()=>'https://jandhan2.herokuapp.com/message/postUpdate/',
    sendOTP:(bank,otp)=>`https://jandhan2.herokuapp.com/account/bank/${bank}/documentOtp/${otp}/getData`,
    feedbackMetrics:()=>'https://jandhan2senti.herokuapp.com/',
    ATMReports:()=>'https://jandhan2.herokuapp.com/atmData/getAtmReports',
    RejectReports:(id)=>`https://jandhan2.herokuapp.com/atmData/updateAtmData/${id}`
}