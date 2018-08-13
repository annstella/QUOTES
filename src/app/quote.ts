export class Quote {
 public showDescription: boolean;
  constructor(public id: number, public name: string, public description: string, public post: string,
  public upvote: number, public downvote: number, public Date: Date) {
      this.showDescription = false;
}
}
