# TODO: Implement Registration Check for Feedback Submissions

## Tasks
- [x] Modify alumni feedback route to check user registration before allowing feedback
- [x] Modify student feedback route to check user registration before allowing feedback
- [x] Test the updated feedback submission logic

## Details
- Ensure only registered users can submit feedback for a webinar
- Maintain the existing duplicate feedback prevention per email and webinar
- Add registration verification by matching email and webinar topic to registration records
