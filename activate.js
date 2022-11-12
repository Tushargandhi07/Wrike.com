let container = document.querySelector("#container");
    let signup_data= JSON.parse(localStorage.getItem("signup_data"))||[];
    let data = JSON.parse(localStorage.getItem("cartData")) || [];
    displayCard(data)

    function displayCard(data) {
        container.innerHTML = ""
        data.forEach((ele, index) => {
            let div = document.createElement("div");
            let department = document.createElement("h1");
            department.innerText = ele.department;

            let comment = document.createElement("h3");
            comment.innerText = ele.comment;

            let des = document.createElement("p");
            des.innerText = ele.discription;

            let price = document.createElement("h2");
            price.innerText = ele.price;

            let validity = document.createElement("p");
            validity.innerText = "user/month";

            div.append(department, comment, des, price, validity);
            container.append(div);

        });
    }
    
    let form = document.querySelector("form");
    form.addEventListener("submit",checkData);

    function checkData(ele){
        ele.preventDefault();
        let data={
            email: form.email.value,
            password: form.password.value
        }
        let result_email="No"
        let result_password="No"
        signup_data.forEach(function(ele){
            if(data.email==ele.email && data.password!=ele.password){
                result_email="Yes"
            }
            else if(data.email==ele.email && data.password==ele.password){
                result_email="Yes"
                result_password="Yes"
            }
        });
        if(result_email=="Yes" && result_password=="Yes"){
            alert("Your 14 days free trial start.");
            window.location.assign("home.html")
        }
        else if(result_email=="Yes" && result_password=="No"){
            alert("Password is incorrect")
        }
        else{
            alert("Email not registered");
        }
    }
    