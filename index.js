const dateInput = document.querySelector('input[type="date"]');
const button = document.querySelector('btn');
const result = document.querySelector('p');
const noResult = document.getElementById('noresult');

function showDate(){
    const birthdayDate = dateInput.value;
    if (birthdayDate == ''){
        noResult.textContent = "Выберите дату!";
    }
    else{
        if(new Date() < new Date(birthdayDate)){
           const difference = Math.floor(((new Date(birthdayDate) - new Date())/(1000 * 60 * 60 * 24))+1);
           const str = difference.toString();
           if (str.slice(-1) == 2 || str.slice(-1) == 3 || str.slice(-1) == 4){
            noResult.textContent = "";
            result.textContent = `До вашего дня рождения осталось ${difference} дня`;
           }
           else{
            noResult.textContent = "";
            result.textContent = `До вашего дня рождения осталось ${difference} дней`;
           }
        }
        else{
            noResult.textContent = "";
            result.textContent = "Ваш день рождения в этом году уже прошёл!"; 
        }
    }
}
