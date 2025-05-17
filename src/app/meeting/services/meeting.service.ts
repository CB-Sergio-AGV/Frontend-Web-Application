import { Injectable } from '@angular/core';

import { BaseService } from "../../meeting/services/base.service";
import { Meeting } from "../model/meeting.entity";


@Injectable({
  providedIn: 'root'
})
export class MeetingService extends BaseService<Meeting> {

  constructor() {
    super();
    this.basePath = `${environment.serverBasePath}`;
    this.resourceEndpoint = '/meetings';
  }
}
