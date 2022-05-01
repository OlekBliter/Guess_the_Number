let z = 100
let count = 0
let attempts = 10
let secret = 0
function start(){
    secret =  Math.ceil(Math.random()*100)
    console.log(secret)

    count = 0
    attempts = 10
    document.getElementById('attempts-count').textContent = 'Attempts left - ' + attempts  
    document.querySelector('.card').style.zIndex = z+1
    z++
    document.querySelector('.start').style.display = 'none'
    document.getElementById('muchORless').textContent = ''
    document.getElementById('number').value=''
    document.querySelector('.quas').textContent = '?'
}
function guess(){
    if(document.getElementById('number').value!=''){
        if(attempts>0){
            if(document.getElementById('number').value>secret){
                document.getElementById('muchORless').textContent = 'Your number is too large'
                count++
                attempts--
                document.getElementById('attempts-count').textContent = 'Attempts left - ' + attempts                 
            }else if (document.getElementById('number').value<secret){
                document.getElementById('muchORless').textContent = 'Your number is too small'
                count++
                attempts--
                document.getElementById('attempts-count').textContent = 'Attempts left - ' + attempts
            }else{
                document.querySelector('.quas').textContent = secret
                alert('You win! Your attempts '+count)
                setTimeout(reset, 500)
            }
        }else{
            alert('You have no attempts. Try again. The number was ' + secret)
            setTimeout(reset, 500)
        }
    }else{
        alert("You didn't print anything. Please try again")
    }
}
function reset(){
    document.querySelector('.start-menu').style.zIndex = z+1
    z++
    document.querySelector('.start').style.display = 'flex'
    document.querySelector('.start').style.alignItems = 'center'
    document.querySelector('.start').style.justifyContent = 'center'
    document.getElementById('muchORless').textContent = ''
    document.getElementById('number').value=''
    document.querySelector('.quas').textContent = '?'
}