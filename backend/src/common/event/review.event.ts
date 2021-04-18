type ReviewEventData = {
  campground: string;
  rating?: number;
};
export class ReviewEvent {
  constructor(readonly name: string, readonly data: ReviewEventData) {}
}
