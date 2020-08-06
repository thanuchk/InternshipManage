                                                        //เพิ่มงาน
//ชื่องาน
$(document).ready(function(){
    $('#submit1').click(function(){
      
        var Workname = $('#checkWorkname').val();
        if(Workname == ""){
          $('#showtextWorkname').html('กรุณากรอกข้อมูล');
          $('#showtextWorkname').css('color','red');
          return false;
        }
    });
  });
//ประเภทงาน          
$(document).ready(function(){
    $('#submit1').click(function(){
      
        var Worktype = $('#checkWorktype').val();
        if(Worktype == ""){
          $('#showtextWorktype').html('กรุณาเลือก');
          $('#showtextWorktype').css('color','red');
          return false;
        }
    });
  });    
  
  //ผู้รับผิดชอบ
  $(document).ready(function(){
    $('#submit1').click(function(){
      
        var Responsibility1 = $('#checkResponsibility1').val();
        if(Responsibility1 == ""){
          $('#showtextResponsibility1').html('กรุณาเลือก');
          $('#showtextResponsibility1').css('color','red');
          return false;
        }
    });
  }); 

//วันที่เริ่ม
$(document).ready(function(){
    $('#submit1').click(function(){
      
        var Firstday1 = $('#checkFirstday1').val();
        if(Firstday1 == ""){
          $('#showtextFirstday1').html('กรุณาเลือก');
          $('#showtextFirstday1').css('color','red');
          return false;
        }
    });
  });

//เวลาที่เริ่ม
$(document).ready(function(){
    $('#submit1').click(function(){
      
        var Starttime1 = $('#checkStarttime1').val();
        if(Starttime1 == ""){
          $('#showtextStarttime1').html('กรุณากรอกข้อมูล');
          $('#showtextStarttime1').css('color','red');
          return false;
        }
    });
  });

  //วันที่สิ้นสุด
  $(document).ready(function(){
    $('#submit1').click(function(){
      
        var Lastday1 = $('#checkLastday1').val();
        if(Lastday1 == ""){
          $('#showtextLastday1').html('กรุณาเลือก');
          $('#showtextLastday1').css('color','red');
          return false;
        }
    });
  });

  //เวลาที่สิ้นสุด
  $(document).ready(function(){
    $('#submit1').click(function(){
      
        var Endtime1 = $('#checkEndtime1').val();
        if(Endtime1 == ""){
          $('#showtextEndtime1').html('กรุณากรอกข้อมูล');
          $('#showtextEndtime1').css('color','red');
          return false;
        }
    });
  });



                                                        //เพิ่มการประชุม
//ชื่อการประชุม   
$(document).ready(function(){
    $('#submit2').click(function(){
      
        var Meetingname = $('#checkMeetingname').val();
        if(Meetingname == ""){
          $('#showtextMeetingname').html('กรุณากรอกข้อมูล');
          $('#showtextMeetingname').css('color','red');
          return false;
        }
    });
  });     
  
  //ประเภทการประชุม
  $(document).ready(function(){
    $('#submit2').click(function(){
      
        var Meetingtype = $('#checkMeetingtype').val();
        if(Meetingtype == ""){
          $('#showtextMeetingtype').html('กรุณาเลือก');
          $('#showtextMeetingtype').css('color','red');
          return false;
        }
    });
  });  

  //ผู้รับผิดชอบ
  $(document).ready(function(){
    $('#submit2').click(function(){
      
        var Responsibility2 = $('#checkResponsibility2').val();
        if(Responsibility2 == ""){
          $('#showtextResponsibility2').html('กรุณาเลือก');
          $('#showtextResponsibility2').css('color','red');
          return false;
        }
    });
  }); 

  //วันที่เริ่ม
$(document).ready(function(){
    $('#submit2').click(function(){
      
        var Firstday2 = $('#checkFirstday2').val();
        if(Firstday2 == ""){
          $('#showtextFirstday2').html('กรุณาเลือก');
          $('#showtextFirstday2').css('color','red');
          return false;
        }
    });
  });

//เวลาที่เริ่ม
$(document).ready(function(){
    $('#submit2').click(function(){
      
        var Starttime2 = $('#checkStarttime2').val();
        if(Starttime2 == ""){
          $('#showtextStarttime2').html('กรุณากรอกข้อมูล');
          $('#showtextStarttime2').css('color','red');
          return false;
        }
    });
  });

  //วันที่สิ้นสุด
  $(document).ready(function(){
    $('#submit2').click(function(){
      
        var Lastday2 = $('#checkLastday2').val();
        if(Lastday2 == ""){
          $('#showtextLastday2').html('กรุณาเลือก');
          $('#showtextLastday2').css('color','red');
          return false;
        }
    });
  });

  //เวลาที่สิ้นสุด
  $(document).ready(function(){
    $('#submit2').click(function(){
      
        var Endtime2 = $('#checkEndtime2').val();
        if(Endtime2 == ""){
          $('#showtextEndtime2').html('กรุณากรอกข้อมูล');
          $('#showtextEndtime2').css('color','red');
          return false;
        }
    });
  });
                                                        //เพิ่มการลา
//ชื่อการลา
$(document).ready(function(){
    $('#submit3').click(function(){
      
        var Leavingname = $('#checkLeavingname').val();
        if(Leavingname == ""){
          $('#showtextLeavingname').html('กรุณากรอกข้อมูล');
          $('#showtextLeavingname').css('color','red');
          return false;
        }
    });
  }); 

//ประเภทการลา
$(document).ready(function(){
    $('#submit3').click(function(){
      
        var Leavingtype = $('#checkLeavingtype').val();
        if(Leavingtype == ""){
          $('#showtextLeavingtype').html('กรุณาเลือก');
          $('#showtextLeavingtype').css('color','red');
          return false;
        }
    });
  });  
  //วันที่เริ่ม
  $(document).ready(function(){
    $('#submit3').click(function(){
      
        var Firstday3 = $('#checkFirstday3').val();
        if(Firstday3 == ""){
          $('#showtextFirstday3').html('กรุณาเลือก');
          $('#showtextFirstday3').css('color','red');
          return false;
        }
    });
  });

//เวลาที่เริ่ม
$(document).ready(function(){
    $('#submit3').click(function(){
      
        var Starttime3 = $('#checkStarttime3').val();
        if(Starttime3 == ""){
          $('#showtextStarttime3').html('กรุณากรอกข้อมูล');
          $('#showtextStarttime3').css('color','red');
          return false;
        }
    });
  });

  //วันที่สิ้นสุด
  $(document).ready(function(){
    $('#submit3').click(function(){
      
        var Lastday3 = $('#checkLastday3').val();
        if(Lastday3 == ""){
          $('#showtextLastday3').html('กรุณาเลือก');
          $('#showtextLastday3').css('color','red');
          return false;
        }
    });
  });

  //เวลาที่สิ้นสุด
  $(document).ready(function(){
    $('#submit3').click(function(){
      
        var Endtime3 = $('#checkEndtime3').val();
        if(Endtime3 == ""){
          $('#showtextEndtime3').html('กรุณากรอกข้อมูล');
          $('#showtextEndtime3').css('color','red');
          return false;
        }
    });
  });

  //ผู้อนุมัติ
  $(document).ready(function(){
    $('#submit3').click(function(){
      
        var Endorser = $('#checkEndorser').val();
        if(Endorser == ""){
          $('#showtextEndorser').html('กรุณาเลือก');
          $('#showtextEndorser').css('color','red');
          return false;
        }
    });
  });


