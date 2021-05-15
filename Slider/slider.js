function timestamp(str) {
        //alert(new Date(str).getTime());
        return new Date(str).getTime();
        //return new Date(str).getMonth() +"-"+new Date(str).getDate()+"-"+new Date(str).getFullYear();
    }
    $(".slider").noUiSlider({
        range: {
            min: timestamp('2010'),
            max: timestamp('2016')
        },
        //step: 7 * 24 * 60 * 60 * 1000,
        start: [timestamp('2011'), timestamp('2015')],
        // No decimals
        format: wNumb({
            decimals: 0
        })
    });
    $(".slider").Link('lower').to($(".start"), setDate);

    $(".slider").Link('upper').to($(".end"), setDate);
    // Append a suffix to dates.
    // Example: 23 => 23rd, 1 => 1st.
    function nth(d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }
    // Create a string representation of the date.
    function formatDate(date) {
        // return weekdays[date.getDay()] + ", " + date.getDate() + nth(date.getDate()) + " " +months[date.getMonth()] + " " +date.getFullYear();
        return (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "-" + date.getFullYear();
    }

    // Write a date as a pretty value.
    function setDate(value) {
        $(this).html(formatDate(new Date(+value)));
    }