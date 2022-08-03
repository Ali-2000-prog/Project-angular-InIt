export class Group{
    constructor(
        public groupId: number,
        public userGroupName:string,
        public role: string,
        public options: string,
        public active: boolean,
    ){}
}