export const count = 27253
export const formatted = count.toLocaleString('en-US')
export const thousands = Math.round(count / 1000)

export async function getLiveCount(){
    try{
        const res=await fetch('https://slack-data.hackclub.dev/api/stats')
        if(!res.ok)throw new Error('Failed yooo')
            const data=await res.json()
        return{
            count:(data.member_count??count).toLocaleString('en-US'),
            formatted:((data.member_count??count)/1000),
            thousands:Math.round((data.member_count??count)/1000)
        }
    }catch{
        return(count,formatted,thousands)
    }
}