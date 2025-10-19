export class Serie{
            id: number;
            name: string;
            channel: string;
            seasons: number;
            descp: string;
            linkSerie: string;
            img: string;


            constructor(id: number, name: string, channel: string, seasons: number, descp: string,linkSerie: string, img:string){
                this.id = id;
                this.name = name;
                this.channel = channel;
                this.seasons = seasons;
                this.descp = descp;
                this.linkSerie = linkSerie;
                this.img = img;
            }
        }