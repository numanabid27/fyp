document.addEventListener('DOMContentLoaded', function() {
    const prevMonthButton = document.querySelector('.prev-month');
    const nextMonthButton = document.querySelector('.next-month');
    const monthYearDisplay = document.querySelector('.month-year');
    const calendar = document.querySelector('.calendar-grid');
    const timeSlotsList = document.querySelector('.time-slots-list');

    let selectedDate = null;
    let selectedTime = null;
    let currentDate = new Date();

    function renderCalendar() {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        // Display month and year
        monthYearDisplay.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

        // Clear previous dates
        calendar.innerHTML = '';

        // Generate blank spaces for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const blankCell = document.createElement('div');
            calendar.appendChild(blankCell);
        }

        // Generate dates for the current month
        for (let date = 1; date <= lastDate; date++) {
            const dateCell = document.createElement('div');
            dateCell.classList.add('date');
            dateCell.textContent = date;

            dateCell.addEventListener('click', () => {
                selectDate(new Date(year, month, date));
            });

            calendar.appendChild(dateCell);
        }
    }

    function selectDate(date) {
        selectedDate = date;

        // Update selected date in the calendar
        document.querySelectorAll('.date').forEach(cell => {
            cell.classList.toggle('selected', cell.textContent == date.getDate());
        });

        // Generate time slots for the selected date
        renderTimeSlots();
    }

    function renderTimeSlots() {
        // Clear previous time slots
        timeSlotsList.innerHTML = '';

        const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

        timeSlots.forEach(time => {
            const timeSlotItem = document.createElement('li');
            const radioInput = document.createElement('input');
            const label = document.createElement('label');

            radioInput.type = 'radio';
            radioInput.name = 'time-slot';
            radioInput.value = time;
            label.textContent = time;

            radioInput.addEventListener('change', () => {
                selectedTime = time;
            });

            timeSlotItem.appendChild(radioInput);
            timeSlotItem.appendChild(label);
            timeSlotsList.appendChild(timeSlotItem);
        });
    }

    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
