import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css'],
})
export class TopicDetailComponent implements OnInit, OnDestroy {
  subs: Subscription;
  topicId: string;
  topic: any;
  topicOwner: any;
  openReply: string = null;
  constructor(private route: ActivatedRoute, private home: HomeService) {}

  ngOnInit(): void {
    this.subs = this.route.params.subscribe((params: Params) => {
      this.topicId = params['id'];
      this.topic = this.home.getTopicsDataById(this.topicId);
      console.log(this.topic.details.comments[1].replies);

      this.topicOwner = this.home.getTopicOwnerById(this.topic.ownerId);
      console.log(this.topicOwner);
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  getCommentOwnerInfo(id: string) {
    return this.home.getTopicOwnerById(id);
  }
  openReplies(id: string) {
    if (this.openReply == null || this.openReply != id) {
      this.openReply = id;
    } else {
      this.openReply = null;
    }
    console.log(id);
  }
}
