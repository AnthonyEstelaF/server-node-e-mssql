import { Icon } from './icon.model';

export class Marker {
    icon:Icon;
   //Quando creo un nuovo marker e verifico quale label viene passata al costruttore, se contiene il testo
   //“Gas naturale” o “Energia elettrica” (abbreviati in Gas e Elettrica) imposto l’icona e cancello
   //l’etichetta
    constructor(public lat: number, public lng: number, public label?: string)
    {
        if (this.label.includes("Gas")) {
            this.icon = new Icon ( './assets/img/gas.ico', 24 ); //da modificare per ogni icona
             this.label = "";
        }
        if(this.label.includes("elettrica"))
        {
            this.icon = new Icon ( './assets/img/electricity.ico', 24 ); //da modificare per ogni icona

             this.label = "";
        }

        if(this.label.includes("gasolio e olio conbustibile"))
        {
            this.icon = new Icon ( './assets/img/gasolio.ico', 24 ); //da modificare per ogni icona
             this.label = "";
        }
        if(this.label.includes("teleriscaldamento"))
        {
            this.icon = new Icon ( './assets/img/telericaldamento-32.ico', 24 ); //da modificare per ogni icona

             this.label = "";
        }
        if(this.label.includes("GPL"))
        {
            this.icon = new Icon ( './assets/img/gpl.ico', 24 ); //da modificare per ogni icona

             this.label = "";
        }
        if(this.label.includes("NULL"))
        {
            this.icon = new Icon ( './assets/img/null.ico', 24 ); //da modificare per ogni icona

             this.label = "";
        }
        if(this.label.includes("biomase solida"))
        {
            this.icon = new Icon ( './assets/img/biomassSolid-32.ico', 24 ); //da modificare per ogni icona

             this.label = "";
        }
        if(this.label.includes("RSU per teleriscaldamento"))
        {
            this.icon = new Icon ( './assets/img/rsu-32.ico', 24 ); //da modificare per ogni icona

             this.label = "";
        }
        if(this.label.includes("biomase liquide e gassose"))
        {
            this.icon = new Icon ( './assets/img/biomassLiquidGas.ico', 24 ); //da modificare per ogni icona

             this.label = "";
        }
        if(this.label.includes("olio conbustibile"))
        {
            this.icon = new Icon ( './assets/img/oil.ico', 24 ); //da modificare per ogni icona

             this.label = "";
        }

    }
}


