function apple() {
    this.weight = 10;
    this.getWeight = function () {
        return this.weight
    }
    this.decrease=function () {
        this.weight--;
        return this.weight;
    }
    this.isEmpty=function () {
        if(this.weight==0){
            return true
        }else {
            return false
        }
    }
}
function human(name,gender,weight) {
    this.name=name;
    this.gender=true;
    this.weight=weight;
    this.getName=function () {
        return this.name
    }
    this.getGender=function () {
        return this.gender
    }
    this.getWeight=function () {
        return this.weight
    }
    this.setName=function (name) {
        this.name=name
    }
    this.say=function () {
        alert('Hello i am'+this.name)
    }
    this.eat=function (apple) {
        if(apple.isEmpty()==true){
            alert('An het tao rui')
        }else {
            apple.decrease()
            this.weight++
        }
    }
}
tao= new apple()
adam = new human('hieu',true,50)
eva = new human('lala',false,48)