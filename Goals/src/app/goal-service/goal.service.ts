import { Injectable } from '@angular/core';
import { Goal, goals } from '../goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return goals
  }

  getGoal(id){
    for (let goal of goals){
      if (goal.id == id){
        return goal;
      }
    }
  }

  constructor() { }
}