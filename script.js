//working on

//to do

//done

firstArray = []

        secondArray = []

        array = ['economic','field','hidden','halt','draft','integrity','swell', 'neutral','language','price','stellar','wind']

        function tacName(id) {
            var item = array[Math.floor(Math.random()*array.length)];
            document.getElementById(id).innerHTML = item;
        }

        one = document.getElementById(1)
        two = document.getElementById(2)

        console.log(one + ' ' + two)
