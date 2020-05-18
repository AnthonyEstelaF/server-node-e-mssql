export class Marker {
    icon = {}
   //Quando creo un nuovo marker e verifico quale label viene passata al costruttore, se contiene il testo
   //“Gas naturale” o “Energia elettrica” (abbreviati in Gas e Elettrica) imposto l’icona e cancello
   //l’etichetta
    constructor(public lat: number, public lng: number, public label?: string)
    {
        if (this.label.includes("Gas")) {
            this.icon = { url: './assets/img/gas.ico' };
             this.label = "";
        }
        if(this.label.includes("elettrica"))
        {
            this.icon = { url: './assets/img/electricity.ico' };
             this.label = "";
        }

        if(this.label.includes("gasolio e olio conbustibile"))
        {
            this.icon = { url: './assets/img/gasolio.ico' };
             this.label = "";
        }
        if(this.label.includes("teleriscaldamento"))
        {
            this.icon = { url: './assets/img/teleriscaldamento-32.ico' };
             this.label = "";
        }
        if(this.label.includes("GPL"))
        {
            this.icon = { url: './assets/img/gpl.ico' };
             this.label = "";
        }
        if(this.label.includes("NULL"))
        {
            this.icon = { url: './assets/img/null.ico' };
             this.label = "";
        }
        if(this.label.includes("biomase solida"))
        {
            this.icon = { url: './assets/img/biomassSolid-32.ico' };
             this.label = "";
        }
        if(this.label.includes("RSU per teleriscaldamento"))
        {
            this.icon = { url: './assets/img/rsu-32.ico' };
             this.label = "";
        }
        if(this.label.includes("biomase liquide e gassose"))
        {
            this.icon = { url: './assets/img/biomassLiquidGas.ico' };
             this.label = "";
        }
        if(this.label.includes("olio conbustibile"))
        {
            this.icon = { url: './assets/img/oil.ico' };
             this.label = "";
        }

    }
}


