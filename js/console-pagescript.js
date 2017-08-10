$(document).ready(() => {
    $('#student-data-container').empty()

    $('#risk-button-1').click(() => {
        $('#tab-header').removeClass('bg-danger').removeClass('bg-success').addClass('teal')
    })

    $('#risk-button-2').click(() => {
        $('#tab-header').removeClass('bg-success').removeClass('teal').addClass('bg-danger')
    })

    $('#risk-button-3').click(() => {
        $('#tab-header').removeClass('bg-danger').removeClass('teal').addClass('bg-success')
    })

    $.ajax({
        dataType: "json",
        url: 'http://52.14.179.178:4404/api/v1/students',
        success: function(data) {
            data.reverse()
            
            data.forEach(student => {
                let studentCard = createStudentCard(student)
                let clone = studentCard.clone()

                let clickFunc = () => {
                    showStudentData(studentCard.data)
                }

                studentCard.click(clickFunc)
                clone.click(clickFunc)

                $('#panel1').append(studentCard)

                if(studentCard.data.atRisk) {
                    $('#panel2').append(clone)
                } else {
                    $('#panel3').append(clone)
                }
            })
        }
    });
})

function createStudentCard(data) {
    /*
    <div class="risk-card waves-effect card p-3 hoverable mt-2 mb-2">
        <div class="row">
            <div class="col-xs-6 col-md-3 my-auto text-center">
                <img src="https://avatars0.githubusercontent.com/u/20342762?v=4&s=400" class="risk-thumbnail z-depth-2">
            </div>
            <div class="col-xs-6 col-md-9 my-auto text-xs-center text-sm-center text-lg-left">
                <h2>Parth Shelgaonkar</h2>
                <span class="font-weight-bold text-danger">At Risk</span>
            </div>
        </div>
    </div>
    */
    let riskBadge = null
    if(data.atRisk) {
        riskBadge = $('<span class="font-weight-bold text-danger">At Risk</span>')
    } else {
        riskBadge = $('<span class="font-weight-bold text-success">Not At Risk</span>')
    }

    let card = $('<div>', {class: 'risk-card waves-effect card p-3 hoverable mt-2 mb-2'})
    let row = $('<div>', { class: 'row' })
    let thumbnailCol = $('<div class="col-xs-6 col-md-3 my-auto text-center"><img src="images/default_profile.png" class="risk-thumbnail z-depth-2"></div>')
    let nameCol = $('<div>', { class: 'col-xs-6 col-md-9 my-auto text-xs-center text-sm-center text-lg-left' })

    nameCol.append($('<h2>', { class: "text-capitalize", text:data.name }))
    nameCol.append(riskBadge)

    row.append(thumbnailCol)
    row.append(nameCol)

    card.append(row)
    card.data = data

    return card
}

function showStudentData(data) {
    let $container = $('#student-data-container')
    $container.empty()

    $container.append('<h1 class="text-center text-underline text-capitalize mb-4"><span id="student-name-header">' + data.name + '</span></h1>')

    let riskRow = $('<div>', { class: "row h-10" })
    riskRow.append('<span class="h5 student-property my-auto mb-2 mt-2">Risk Status: </span>')

    if(data.atRisk) {
        riskRow.append($('<span>', { id: "student-risk-status", class: "card bg-danger", text: "At Risk" }))
    } else {
        riskRow.append($('<span>', { id: "student-risk-status", class: "card bg-success", text: "Not At Risk" }))
    }

    riskRow.appendTo($container)

    studentDataFields.forEach(studentData => {
        let row = $('<div>', { class: "row h-10" })
        row.append($('<span>', { class: "h5 student-property my-auto mb-2 mt-2", text: studentData.description + ":" }))
        row.append($('<span>', { class: "my-auto mt-2", text: studentData.evaluate(data[studentData.label]) }))
        row.appendTo($container)
    })
}