let persona = {
    nombre: "Carlos",
    apellido: "Ulibarri",
    getName: function(){
        return `${this.nombre} ${this.apellido}`;
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima",
    },
    getDomicilio: function(){
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp},${this.domicilio.municipio}`;
    }
}

module.exports = persona;