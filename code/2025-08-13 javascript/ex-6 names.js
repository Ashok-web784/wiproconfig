
        let names = ["Mahammad", "Michael", "harsha", "chandra", "ram", "Alexandra"];

        let longNames = names.filter(function(name) {
            return name.length > 5;
        });

        let upperCaseNames = longNames.map(function(name) {
            return name.toUpperCase();
        });

         document.getElementById("result").innerHTML = upperCaseNames.join(", ");