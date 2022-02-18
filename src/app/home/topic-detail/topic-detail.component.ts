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
  showHideId: string = null;
  showHideCommentId: string = null;
  constructor(private route: ActivatedRoute, private home: HomeService) {}

  ngOnInit(): void {
    this.subs = this.route.params.subscribe((params: Params) => {
      this.topicId = params['id'];
      this.topic = this.home.getTopicsDataById(this.topicId);
      this.topicOwner = this.home.getTopicOwnerById(this.topic.ownerId);
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
  }
  showHide(id: string) {
    if (this.showHideId == null || this.showHideId != id) {
      this.showHideId = id;
    } else {
      this.showHideId = null;
    }
  }
  showHideComment(id: string) {
    if (this.showHideCommentId == null || this.showHideCommentId != id) {
      this.showHideCommentId = id;
    } else {
      this.showHideCommentId = null;
    }
  }
}
