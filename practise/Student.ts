class Student {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    public storeDetail() {
        fetch("http://localhost:3000/posts", {
            method: "POST",
            body: JSON.stringify({
                name: this.name,
                email: this.email
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then((res: any) => {
            return res = res.json();
        }).then((res: any) => {
            console.log(res);
        });
    }
}

let student=new Student("Priyanka" ,"priyanka@gmail.com")
student.storeDetail();
