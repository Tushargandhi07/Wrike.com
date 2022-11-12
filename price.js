let container = document.querySelector("#container")
    let pricing_data = [];
    let url = "https://636dbafab567eed48ac79c97.mockapi.io/plan";
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            displayCard(data);
            pricing_data = data;
        });

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


            let Try = document.createElement("button");
            Try.innerText = "Try for free";
            Try.addEventListener("click", function () {
                addtocart(ele);
            })

            div.append(department, comment, des, price, validity, Try);
            container.append(div);

        })
    }

    function addtocart(data) {
        let cart = [];
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].department == data.department) {
                alert("Plan is already added");
                return;
            }
        }
        cart.push(data);
        localStorage.setItem("cartData", JSON.stringify(cart));
        alert("Plan added");
        window.location.assign("activate.html")
    }