export default function date()
{
    const d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const month=monthNames[d.getMonth()];
    
    const dayNames=["Saturday","Sunday","Monday","Tuesday","Thursday","Friday"];
    const day=dayNames[d.getDay()];

    var value="Today is "+day+", "+month+" "+d.getDate();
    return value;
}
