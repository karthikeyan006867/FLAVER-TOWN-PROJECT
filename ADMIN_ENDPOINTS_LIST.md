# Complete Admin API Endpoints List

## Total: 43 Endpoints Across 8 Categories

### ✅ Admin Access & Security (1 endpoint)
1. `GET /api/admin/check` - Verify admin status

### ✅ User Management (19 endpoints)
2. `GET /api/admin/users/list` - List all users with pagination
3. `GET /api/admin/users/[userId]` - Get specific user details
4. `PATCH /api/admin/users/[userId]` - Update user information
5. `DELETE /api/admin/users/[userId]` - Delete a user
6. `POST /api/admin/users/search` - Advanced user search
7. `POST /api/admin/users/add-lessons` - Add lessons to user
8. `POST /api/admin/users/remove-lessons` - Remove lessons from user
9. `POST /api/admin/users/update-progress` - Update all user progress
10. `POST /api/admin/users/reset-progress` - Reset user progress
11. `POST /api/admin/users/batch-update` - Batch update multiple users
12. `POST /api/admin/users/grant-achievements` - Grant achievements
13. `POST /api/admin/users/update-points` - Update user points
14. `POST /api/admin/users/update-streak` - Update user streak
15. `POST /api/admin/users/ban` - Ban/unban user
16. `POST /api/admin/users/set-role` - Set user role
17. `POST /api/admin/users/bulk-delete` - Delete multiple users
18. `POST /api/admin/users/tags` - Add custom tags
19. `POST /api/admin/users/custom-field` - Set custom metadata
20. `POST /api/admin/unlock-lessons` - Original unlock endpoint

### ✅ Course Management (5 endpoints)
21. `GET /api/admin/courses/list` - List all courses
22. `GET /api/admin/courses/[courseId]/stats` - Get course statistics
23. `POST /api/admin/courses/enroll` - Enroll user in course
24. `POST /api/admin/courses/unenroll` - Unenroll user from course
25. `POST /api/admin/delete-users` - Legacy delete endpoint

### ✅ Analytics & Reporting (7 endpoints)
26. `GET /api/admin/analytics/stats` - Platform-wide statistics
27. `GET /api/admin/analytics/engagement` - User engagement metrics
28. `GET /api/admin/analytics/retention` - Retention rates (D1, D7, D30)
29. `GET /api/admin/analytics/growth` - User growth over time
30. `GET /api/admin/analytics/completion` - Completion rate distribution
31. `GET /api/admin/activity/logs` - User activity logs
32. `GET /api/admin/audit/logs` - Admin action audit trail

### ✅ Leaderboard Management (2 endpoints)
33. `GET /api/admin/leaderboard/get` - Get leaderboard data
34. `POST /api/admin/leaderboard/reset` - Reset leaderboard

### ✅ Communications (3 endpoints)
35. `POST /api/admin/notifications/send` - Send notification to user
36. `POST /api/admin/notifications/broadcast` - Broadcast to all users
37. `POST /api/admin/communications/email` - Send bulk emails

### ✅ Data Management (4 endpoints)
38. `GET /api/admin/export/users` - Export user data (JSON/CSV)
39. `POST /api/admin/import/progress` - Import user progress
40. `GET /api/admin/backup/create` - Create full backup
41. `POST /api/admin/backup/restore` - Restore from backup

### ✅ System Management (3 endpoints)
42. `GET /api/admin/system/health` - System health monitoring
43. `GET /api/admin/system/flags` - Get feature flags
43. `POST /api/admin/system/flags` - Update feature flags (same route, different method)
43. `POST /api/admin/system/clear-cache` - Clear application cache

---

## HTTP Methods Breakdown

- **GET**: 14 endpoints (Read operations)
- **POST**: 26 endpoints (Write operations)
- **PATCH**: 1 endpoint (Update operations)
- **DELETE**: 2 endpoints (Delete operations)

---

## Features by Category

### User Management: 20 features
- View, search, filter users
- Add/remove lessons
- Update points, streaks, achievements
- Reset progress (granular or complete)
- Ban/unban users
- Assign roles
- Custom tags and metadata
- Batch operations
- Bulk deletion

### Course Management: 5 features
- Course listing
- Enrollment statistics
- Enroll/unenroll users
- Course-specific analytics

### Analytics: 7 features
- Platform statistics
- User engagement tracking
- Retention analysis
- Growth metrics
- Completion distribution
- Activity monitoring
- Audit logging

### Communications: 3 features
- Individual notifications
- Platform broadcasts
- Email campaigns

### Data Management: 4 features
- Data export (multiple formats)
- Progress import
- Full system backup
- Backup restoration

### Leaderboard: 2 features
- View rankings
- Reset standings

### System: 3 features
- Health monitoring
- Feature flags
- Cache management

### Security: 1 feature
- Admin verification

---

## Total Features: 50+

All endpoints are protected by admin email verification:
- kaarthii009.g@gmail.com
- karthii009.g@gmail.com

---

*Generated: December 31, 2025*
*Admin System v1.0*
