function skillMember() {
    this.name = "Skill Member";
    this.id = "skillMember";
    this.skill = 0;
    this.cost = 100;
    this.desc = "Increase the skill of a member by 1";
    this.increase = function() {
        this.skill += 1;
    }
}