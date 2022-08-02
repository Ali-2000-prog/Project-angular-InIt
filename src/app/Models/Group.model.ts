export class Group{
    constructor(
        public groupId: string,
        public userGroupName:string,
        public role: string,
        public options: String,
        public active: number,
    ){}
}