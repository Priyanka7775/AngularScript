var Student = /** @class */ (function () {
    function Student(name, email) {
        this.name = name;
        this.email = email;
    }
    Student.prototype.storeDetail = function () {
        fetch("http://localhost:3000/posts", {
            method: "POST",
            body: JSON.stringify({
                name: this.name,
                email: this.email
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(function (res) {
            return res = res.json();
        }).then(function (res) {
            console.log(res);
        });
    };
    return Student;
}());
var student = new Student("Priyanka", "priyanka@gmail.com");
student.storeDetail();
