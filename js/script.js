
$(window).resize(function(){

    if ($(window).width() <= 768) {  

        $(document).ready(function() {
            var body = $('html,body'), NAVBAR_HEIGHT = 70;
            function smoothScrollingTo(target) {
              if($(target)) body.animate({scrollTop:$(target).offset().top - NAVBAR_HEIGHT}, 500);
            }
            $('a[href*=\\#]').on('click', function(event){
              event.preventDefault();
              smoothScrollingTo(this.hash);
            });
            $(document).ready(function(){
              smoothScrollingTo(location.hash);
            });
          });
           

    }     

});

$(document).ready(function () {
    $('nav li').click(function(e) {

        $('nav li').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });
});


$(document).ready(function () {
    $('nav a').click(function(e) {

        $('nav a').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });
});




// Corona Tracker Boxes


$.getJSON({
    // url: 'https://www.mohfw.gov.in/data/datanew.json',
    url: './data.json',
    type: "get",
    dataType: "json",
  
    success: function(data) {

        $.each(data, function (index, value) {
            if(value.sno=="11111"){
                document.getElementById('total').append(value.new_positive);
                document.getElementById('total_change').append(value.new_positive-value.positive);


                document.getElementById('active').append(value.new_active);
                document.getElementById('active_percentage').append((value.new_active*100/value.new_positive).toFixed(2));
                if(value.new_active-value.active>=0){
                    document.getElementById('active_change').append(value.new_active-value.active);     
                    document.getElementById('active_change_arrow').innerHTML='(<i class="fas fa-arrow-up"></i>)';
                    document.getElementById('active_change').style.color="red";
                    document.getElementById('active_change_arrow').style.color="red";               
                }
                else{
                    document.getElementById('active_change').append(value.active-value.new_active);
                    document.getElementById('active_change_arrow').innerHTML='(<i class="fas fa-arrow-down"></i>)';
                    document.getElementById('active_change').style.color="green"; 
                    document.getElementById('active_change_arrow').style.color="green"; 
                }


                document.getElementById('cured').append(value.new_cured);
                document.getElementById('cured_percentage').append((value.new_cured*100/value.new_positive).toFixed(2));
                document.getElementById('cured_change').append(value.new_cured-value.cured);


                document.getElementById('death').append(value.new_death);  
                document.getElementById('death_percentage').append((value.new_death*100/value.new_positive).toFixed(2)); 
                document.getElementById('death_change').append(value.new_death-value.death);   
                

            }



            });

            // $.each(data, function (index, value) {
            //     if(value.sno=="11111"){

            //     }
            
            // });
    }     
  
});



// Scroll Top Button 

//Get the button:
    // mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction();};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById('myBtn').style.display = "block";
        } 
        else {
            document.getElementById('myBtn').style.display = "none";
        }
    }

// When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }





// Google Pie Chart using json data

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    $.ajax({
        url: "./data.json",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            var arr = [['Cases Type','Count']];    // Define an array and assign columns for the chart.

            // Loop through each data and populate the array.
            $.each(data, function (index, value) {
                if(value.sno=="11111"){
                arr.push(['Active',parseInt(value.new_active)]);
                arr.push(['Cured',parseInt(value.new_cured)]);
                arr.push(['Death',parseInt(value.new_death)]);
                }
            });

            // console.log(arr)
        
            var piechart = google.visualization.arrayToDataTable(arr);

            var options = {

                title: 'Covid-19 Cases in India',
                // legend: {position: 'center'},
                is3D: true,
                // pieHole: 0.4,
                // pieStartAngle: 100,
                // pieSliceText: 'label',
                // pieSliceText: 'value-&-percentage',
                // tooltip: { trigger: 'none' },
                slices: { 0: { color: 'blue' }, 1: { color: '#138808' }, 2: {color: 'red'} },
                // sliceVisibilityThreshold: '',

                backgroundColor: 'transparent',

                legend: {position: 'labeled'},

            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(piechart, options);
        },

        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('Got an Error');
        }

    });
}

// Pop up chart on hover

$(function() {
    $('.box-faces').hover(function() {
        $('#piechart').toggle();
    });
});
