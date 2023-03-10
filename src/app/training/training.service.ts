import { Subject } from "rxjs";
import { Exercise } from "./exercise.model";


export class TrainingService {

     exerciseChanged = new Subject<Exercise>()  ; 

    private runningExercise: Exercise | undefined  | null ; 

    private exercises : Exercise[] = []; 

    private availableExercise: Exercise[] = [
        {id: 'crunches', name: 'Crunche', duration: 30, calories: 8}, 
        {id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15},
        {id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18},
        {id: 'burpees', name: 'Burpees', duration: 60, calories: 8}
    ]; 

    constructor() {
    }

    getAvailableExercies() {
        return this.availableExercise.slice(); 
    }

    startExercise(selectedId: string) {
        this.runningExercise = this.availableExercise.find(ex => ex.id === selectedId) ;
        this.exerciseChanged.next({ ...this.runningExercise });  
    }

    getRunningExercise() {
        return { ...this.runningExercise }; 
    }

    completeExercise() {
        this.exercises.push({
            ...this.runningExercise, 
            date: new Date(), 
            state: 'completed'
        }); 
        this.runningExercise = null; 
        this.exerciseChanged.next(null); 
    }

    cancelExercise(progress: number) {
        this.exercises.push({
            ...this.runningExercise, 
            duration: this.runningExercise.duration * (progress /100), 
            calories: this.runningExercise.calories * (progress /100), 
            date: new Date(), 
            state: 'cancelled'
        }); 
        this.runningExercise = null; 
        this.exerciseChanged.next(null); 
    }

    getCompletedOrCancelledExercises() {
        return this.exercises.slice(); 
    }
}