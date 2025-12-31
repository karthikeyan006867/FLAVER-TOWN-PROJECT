# Admin System Documentation

## Admin Users

The following emails have full admin access:
- **kaarthii009.g@gmail.com**
- **karthii009.g@gmail.com**

## 50+ Admin Features & Endpoints

### 1. User Management (22 Features)

#### 1.1 View & Search Users
- `GET /api/admin/users/list` - List all users with pagination
- `POST /api/admin/users/search` - Advanced user search with filters
- `GET /api/admin/users/[userId]` - Get detailed user information

#### 1.2 Modify User Data
- `PATCH /api/admin/users/[userId]` - Update user profile information
- `POST /api/admin/users/update-progress` - Modify user progress data
- `POST /api/admin/users/custom-field` - Set custom metadata fields

#### 1.3 Lesson Management
- `POST /api/admin/users/add-lessons` - Add completed lessons to user
- `POST /api/admin/users/remove-lessons` - Remove lessons from user
- `POST /api/admin/unlock-lessons` - Unlock specific lessons

#### 1.4 Points & Rewards
- `POST /api/admin/users/update-points` - Set, add, or subtract points
- `POST /api/admin/users/update-streak` - Modify user streak
- `POST /api/admin/users/grant-achievements` - Award achievements

#### 1.5 Progress Management
- `POST /api/admin/users/reset-progress` - Reset user progress (all/lessons/points/streak)

#### 1.6 User Actions
- `DELETE /api/admin/users/[userId]` - Delete a user
- `POST /api/admin/users/bulk-delete` - Delete multiple users at once
- `POST /api/admin/users/ban` - Ban or suspend users
- `POST /api/admin/users/set-role` - Assign user roles
- `POST /api/admin/users/tags` - Add custom tags to users

#### 1.7 Batch Operations
- `POST /api/admin/users/batch-update` - Update multiple users simultaneously

### 2. Course Management (5 Features)

- `GET /api/admin/courses/list` - View all available courses
- `GET /api/admin/courses/[courseId]/stats` - Get course completion statistics
- `POST /api/admin/courses/enroll` - Enroll users in courses
- `POST /api/admin/courses/unenroll` - Remove users from courses
- Course-specific analytics and enrollment rates

### 3. Analytics & Reporting (7 Features)

#### 3.1 Platform Analytics
- `GET /api/admin/analytics/stats` - Overall platform statistics
- `GET /api/admin/analytics/engagement` - User engagement metrics
- `GET /api/admin/analytics/retention` - Day 1, 7, 30 retention rates
- `GET /api/admin/analytics/growth` - User growth over time
- `GET /api/admin/analytics/completion` - Lesson completion distribution

#### 3.2 Activity Tracking
- `GET /api/admin/activity/logs` - User activity logs
- `GET /api/admin/audit/logs` - Admin action audit trail

### 4. Leaderboard Management (2 Features)

- `GET /api/admin/leaderboard/get` - View current leaderboard
- `POST /api/admin/leaderboard/reset` - Reset leaderboard standings

### 5. Communications (3 Features)

- `POST /api/admin/notifications/send` - Send notification to specific user
- `POST /api/admin/notifications/broadcast` - Broadcast message to all users
- `POST /api/admin/communications/email` - Send bulk emails

### 6. Data Management (5 Features)

#### 6.1 Export
- `GET /api/admin/export/users` - Export user data (JSON/CSV formats)

#### 6.2 Import/Backup
- `POST /api/admin/import/progress` - Import user progress from JSON
- `GET /api/admin/backup/create` - Create full system backup
- `POST /api/admin/backup/restore` - Restore from backup

### 7. System Management (4 Features)

- `GET /api/admin/system/health` - System health & metrics
- `GET /api/admin/system/flags` - View feature flags
- `POST /api/admin/system/flags` - Update feature flags
- `POST /api/admin/system/clear-cache` - Clear application cache

### 8. Admin Access Control (1 Feature)

- `GET /api/admin/check` - Verify admin status

---

## Admin Dashboard UI

Access the admin panel at: `/admin-panel`

### Dashboard Features:

#### 📊 Overview Tab
- Total users count
- Active users statistics
- Total lessons completed
- Total points awarded
- Average progress per user
- Popular lessons ranking

#### 👥 User Management Tab
- Complete user list with details
- Search and filter users
- Quick actions per user:
  - Add/remove lessons
  - Update points
  - Grant achievements
  - Reset progress
  - Send notifications
  - Ban/unban

#### 📈 Analytics Tab
- Real-time platform statistics
- User engagement metrics
- Retention analytics
- Growth trends
- Course completion rates

#### 🔔 Notifications Tab
- Send targeted notifications
- Broadcast announcements
- Message history

#### ⚙️ System Tab
- Feature flag management
- System health monitoring
- Cache management
- Backup/restore tools

---

## Usage Examples

### Example 1: Unlock Lessons for a User

```bash
# Using PowerShell
powershell -ExecutionPolicy Bypass -File "scripts/unlock-html-lessons.ps1"

# Or via API
POST /api/admin/users/add-lessons
{
  "userId": "user_123abc",
  "lessonIds": ["html-1", "html-2", "html-3"]
}
```

### Example 2: Update User Points

```bash
# Set points to specific value
POST /api/admin/users/update-points
{
  "userId": "user_123abc",
  "points": 1000,
  "operation": "set"
}

# Add points
POST /api/admin/users/update-points
{
  "userId": "user_123abc",
  "points": 500,
  "operation": "add"
}
```

### Example 3: Export All Users

```bash
GET /api/admin/export/users?format=csv
```

### Example 4: Broadcast Notification

```bash
POST /api/admin/notifications/broadcast
{
  "message": "New HTML course released!",
  "type": "announcement"
}
```

### Example 5: Reset User Progress

```bash
POST /api/admin/users/reset-progress
{
  "userId": "user_123abc",
  "resetType": "lessons"  # Options: all, lessons, points, streak, achievements
}
```

### Example 6: Batch Update Users

```bash
POST /api/admin/users/batch-update
{
  "userIds": ["user_1", "user_2", "user_3"],
  "updates": {
    "points": 500,
    "streak": 10
  }
}
```

---

## Admin Features Summary

| Category | Features Count |
|----------|----------------|
| User Management | 22 |
| Course Management | 5 |
| Analytics & Reporting | 7 |
| Leaderboard | 2 |
| Communications | 3 |
| Data Management | 5 |
| System Management | 4 |
| Access Control | 1 |
| **TOTAL** | **49+** |

---

## Security Notes

- All admin endpoints verify admin status using email whitelist
- Admin actions are logged in audit trail
- Sensitive operations require confirmation
- Backup/restore operations are tracked
- All modifications include admin attribution

---

## Future Enhancements

Additional features that can be added:
1. Role-based access control (super admin, moderator, etc.)
2. Scheduled tasks and automation
3. Advanced reporting and visualization
4. User segmentation and cohort analysis
5. A/B testing framework
6. Email campaign management
7. Custom dashboard widgets
8. Real-time monitoring
9. API rate limiting
10. Webhook management

---

*Last Updated: December 31, 2025*
*Admin System Version: 1.0*
