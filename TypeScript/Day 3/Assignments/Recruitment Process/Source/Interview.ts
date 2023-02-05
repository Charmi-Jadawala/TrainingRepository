import { applicantList } from "./Applicant";

export interface Interview{
    id: number;
    applicantId: number;
    date: string;
    time: string;
    result?: boolean;
}

export class Interviews{
    createInterview(inp: Interview){
        var isExist = applicantList.filter((current) => {return current.id == inp.applicantId});
        if(isExist.length < 1){
            console.log("Invalid Applicant ID\n");
        }
        else{
            interviewList.push(inp);
        }
    }

    updateInterviewResult(inpId: number, result: boolean){
        for (const index of interviewList){
            if(index.id == inpId){
                index.result = result;
                return;
            }
        }
        console.log("\nInvalid ID");
    }

    viewAllInterviews(){
        console.log("Scheduled Interviews: ");
        interviewList.forEach(interview => {
            console.log(`Interview ID: ${interview.id}, Applicant ID: ${interview.applicantId}, Interview Date: ${interview.date}, Interview Time: ${interview.time}`);
        });
        console.log("");
    }

    viewInterview(inpId: number){
        for (const index of interviewList){
            if(index.id == inpId){
                console.log(`Interview ID: ${index.id}, Applicant ID: ${index.applicantId}, Interview Date: ${index.date}, Interview Time: ${index.time}\n`);
                return;
            }
        }
        console.log("Invalid Interview ID: " + inpId + "\n");
    }
}

export var interviewList: Interview[] = [
    {
        id: 1,
        applicantId: 1,
        date: "04-04-2022",
        time: "11:00 AM"
    }
];