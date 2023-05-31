const express = require('express');

const fetchingExerciseSController = require('../controllers/fetching-exercise(s)');

const fetchingMealSController = require('../controllers/fetching-meal(s)');

const fetchingStretcheSController = require('../controllers/fetching-stretch(s)');

const postWorkoutPlan = require('../controllers/WorkoutPlan-RecommendationSystem');

const deleteExerciseFromWorkoutPlan = require('../controllers/delete-exercise-workoutPlan');

const aaddingExerciseToWorkoutPlan = require('../controllers/adding-exercise-workoutPlan');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

//Exercise Routes
router.get('/chest/exercises', fetchingExerciseSController.getChestExercises);

router.get('/arm/exercises', fetchingExerciseSController.getArmExercises);

router.get('/leg/exercises', fetchingExerciseSController.getLegExercises);

router.get('/back/exercises', fetchingExerciseSController.getBackExercises);

router.get('/shoulder/exercises', fetchingExerciseSController.getShoulderExercises);

router.get('/abdominals/exercises', fetchingExerciseSController.getAbdominalsExercises);

router.post('/wourkoutplan-recommendation',isAuth, postWorkoutPlan);

router.get('/workoutplan',isAuth, fetchingExerciseSController.getWorkoutPlan);

router.delete('/wourkoutplan-delete-chest-exercise',isAuth, deleteExerciseFromWorkoutPlan.deleteChestExercise);

router.delete('/wourkoutplan-delete-back-exercise',isAuth, deleteExerciseFromWorkoutPlan.deleteBackExercise)

router.delete('/wourkoutplan-delete-leg-exercise',isAuth, deleteExerciseFromWorkoutPlan.deleteLegExercise)

router.delete('/wourkoutplan-delete-arm-exercise',isAuth, deleteExerciseFromWorkoutPlan.deleteArmExercise)

router.delete('/wourkoutplan-delete-shoulder-exercise',isAuth, deleteExerciseFromWorkoutPlan.deleteShoulderExercise)


//Meals Routes
router.get('/meals/breakfast', fetchingMealSController.getBreakfastMeals);

router.get('/meals/lunch', fetchingMealSController.getLunchMeals);

router.get('/meals/dinner', fetchingMealSController.getDinnerMeals);

router.get('/meal/:mealId', fetchingMealSController.getMealById);

router.post('/add-meal-to-nutritionPlan/:mealId', isAuth, fetchingMealSController.postNutritionAddMeal);

router.post('/delete-meal-from-nutritionPlan/:mealId', isAuth, fetchingMealSController.postNutritionDeleteMeal);

router.get('/nutritionplan/breakfast', isAuth, fetchingMealSController.getBreakfastInNutritionPlan);

router.get('/nutritionplan/lunch', isAuth, fetchingMealSController.getLunchInNutritionPlan);

router.get('/nutritionplan/dinner', isAuth, fetchingMealSController.getDinnerInNutritionPlan);


//Stretch Routes
router.get('/chest/stretches', fetchingStretcheSController.getChestStretches);

router.get('/biceps/stretches', fetchingStretcheSController.getBicepsStretches);

router.get('/triceps/stretches', fetchingStretcheSController.getTricepsStretches);

router.get('/back/stretches', fetchingStretcheSController.getBackStretches);

router.get('/leg/stretches', fetchingStretcheSController.getLegStretches);

router.get('/shoulder/stretches', fetchingStretcheSController.getShloulderStretches);

router.get('/stretch/:stretchId', fetchingStretcheSController.getStretchById);


module.exports = router;
