---
title: Trigger requests via cron schedule
description: Run APIEase requests automatically on a recurring schedule using cron expressions.
---
# Trigger requests via cron schedule

Use the built-in scheduler when you need a request to run at fixed times without any webhook or manual trigger.

## Add a cron schedule
1. Open the request and click the edit icon if needed.
2. In the **Trigger** column, click the plus icon.
3. Select **Cron**.
4. Enter a cron expression (minute, hour, day-of-month, month, day-of-week) such as `0 * * * *` for hourly or `0 2 * * *` for 2 AM daily.
5. Save. APIEase will run the request whenever the expression matches.

## Tips
- Cron uses a 5-field format: minute, hour, day of month, month, day of week.
- Use `*/15 * * * *` for every 15 minutes, `0 9 * * 1-5` for 9 AM on weekdays, and `0 0 1 * *` for the first day of each month.
- Make sure the request has all required parameters so the scheduled runs succeed without manual input.

