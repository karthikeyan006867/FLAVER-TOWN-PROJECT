# Admin Quick Reference Guide

## 🚀 Quick Start

### Access Admin Panel
1. Sign in with admin email: **kaarthii009.g@gmail.com** or **karthii009.g@gmail.com**
2. Navigate to: `http://localhost:3000/admin-panel`
3. You'll see the full admin dashboard

---

## 🎯 Common Admin Tasks

### Task 1: Unlock Lessons for a User

**Via UI:**
1. Go to Admin Panel → Users tab
2. Click "Manage" on the user
3. Click "Add Lessons"
4. Enter lesson IDs: `html-1, html-2, html-3`

**Via Script:**
```powershell
# Edit scripts/unlock-html-lessons.ps1
# Change $userId and $lessons array
powershell -ExecutionPolicy Bypass -File "scripts/unlock-html-lessons.ps1"
```

**Via API:**
```javascript
fetch('/api/admin/users/add-lessons', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 'user_123',
    lessonIds: ['html-1', 'html-2', 'html-3']
  })
})
```

---

### Task 2: Update User Points

**Via UI:**
1. Admin Panel → Users → Manage User
2. Click "Set Points"
3. Enter new point value

**Via API:**
```javascript
// Set points to exact value
POST /api/admin/users/update-points
{ "userId": "user_123", "points": 1000, "operation": "set" }

// Add points
{ "userId": "user_123", "points": 500, "operation": "add" }

// Subtract points
{ "userId": "user_123", "points": 100, "operation": "subtract" }
```

---

### Task 3: Reset User Progress

**Via UI:**
1. Admin Panel → Users → Manage User
2. Click "Reset All"
3. Confirm action

**Via API:**
```javascript
POST /api/admin/users/reset-progress
{
  "userId": "user_123",
  "resetType": "all"  // Options: all, lessons, points, streak
}
```

---

### Task 4: Send Notifications

**Individual User:**
```javascript
POST /api/admin/notifications/send
{
  "userId": "user_123",
  "message": "Congratulations on completing 50 lessons!",
  "type": "info"
}
```

**Broadcast to All:**
```javascript
POST /api/admin/notifications/broadcast
{
  "message": "New Python course available!",
  "type": "announcement"
}
```

---

### Task 5: Export User Data

**Via UI:**
- Click "Export Data" button in admin header

**Via API:**
```javascript
// JSON format
GET /api/admin/export/users

// CSV format
GET /api/admin/export/users?format=csv
```

---

### Task 6: Search Users

```javascript
POST /api/admin/users/search
{
  "query": "john",  // Search by name/email
  "filters": {
    "minPoints": 500,
    "minLessons": 10,
    "hasAchievements": true,
    "createdAfter": "2025-01-01",
    "lastSignInAfter": "2025-12-01"
  }
}
```

---

### Task 7: Batch Operations

**Update Multiple Users:**
```javascript
POST /api/admin/users/batch-update
{
  "userIds": ["user_1", "user_2", "user_3"],
  "updates": {
    "points": 1000,
    "streak": 7,
    "customField": "VIP"
  }
}
```

**Delete Multiple Users:**
```javascript
POST /api/admin/users/bulk-delete
{
  "userIds": ["user_1", "user_2", "user_3"]
}
```

---

### Task 8: Grant Achievements

```javascript
POST /api/admin/users/grant-achievements
{
  "userId": "user_123",
  "achievementIds": ["first-lesson", "week-streak", "100-points"]
}
```

---

### Task 9: Manage Course Enrollment

**Enroll User:**
```javascript
POST /api/admin/courses/enroll
{
  "userId": "user_123",
  "courseId": "html",
  "progress": 0
}
```

**Unenroll User:**
```javascript
POST /api/admin/courses/unenroll
{
  "userId": "user_123",
  "courseId": "html"
}
```

---

### Task 10: View Analytics

**Platform Stats:**
```javascript
GET /api/admin/analytics/stats
// Returns: total users, active users, total lessons, total points, etc.
```

**User Engagement:**
```javascript
GET /api/admin/analytics/engagement?userId=user_123
// Returns: lessons, points, streak, time spent, etc.
```

**Retention Metrics:**
```javascript
GET /api/admin/analytics/retention
// Returns: Day 1, 7, 30 retention rates
```

**Growth Data:**
```javascript
GET /api/admin/analytics/growth?days=30
// Returns: Daily signup data
```

---

## 📋 Admin Checklist

### Daily Tasks
- [ ] Check system health (`/api/admin/system/health`)
- [ ] Review activity logs (`/api/admin/activity/logs`)
- [ ] Monitor new user signups

### Weekly Tasks
- [ ] Review user engagement metrics
- [ ] Check course completion rates
- [ ] Review leaderboard standings
- [ ] Check audit logs for unusual activity

### Monthly Tasks
- [ ] Create data backup (`/api/admin/backup/create`)
- [ ] Export user analytics report
- [ ] Review retention metrics
- [ ] Clean up inactive users (if needed)

---

## 🔧 Troubleshooting

### Admin Access Denied
- Verify you're signed in with admin email
- Check `lib/admin.ts` for correct email in ADMIN_EMAILS array
- Clear browser cache and sign in again

### User Data Not Updating
- Check audit logs to see if action was recorded
- Verify user ID is correct
- Try fetching user data to confirm it exists

### Export Not Working
- Check browser console for errors
- Try different export format (JSON vs CSV)
- Verify admin permissions

---

## 🎓 Best Practices

1. **Always backup before bulk operations**
   ```javascript
   // Create backup first
   await fetch('/api/admin/backup/create')
   
   // Then perform bulk operation
   await fetch('/api/admin/users/batch-update', {...})
   ```

2. **Use search before batch operations**
   - Test your filters with search first
   - Verify the user list matches expectations
   - Then apply batch update

3. **Log important actions**
   - Admin actions are auto-logged
   - Review audit logs regularly
   - Document major changes

4. **Test on single user first**
   - Before batch operations, test on one user
   - Verify the result is correct
   - Then scale to multiple users

5. **Regular backups**
   - Create backups before major changes
   - Store backups securely
   - Test restore process periodically

---

## 📞 Support

For admin system issues or questions:
- Check [ADMIN_SYSTEM.md](ADMIN_SYSTEM.md) for full documentation
- Review audit logs for debugging
- Check browser console for API errors

---

*Admin Quick Reference v1.0*
*Last Updated: December 31, 2025*
