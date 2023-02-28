import { Coach } from "./Coach";

export class CrikateCoach implements Coach{

    getDailyWorkOut(): string {
        return "Practice your spin bowling techinque!";
    }
    
}