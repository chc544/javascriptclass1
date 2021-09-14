<?php include 'includes/top.php';?>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Navn:</p>
                    <input class="named">
                    <p>Huller:</p>
                    <input class="HolesDoc" value="">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Luk</button>
                    <button type="button" class="btn btn-primary start makelist" data-bs-dismiss="modal">Start</button>
                </div>
            </div>
        </div>
    </div>

    <br><br><br>

    <h1 class="text-center"><span class="name">Navn: </span></h1>
    <ul class="list d-flex flex-column list-inline"></ul>

    <h1 class="text-center">Score: </h1>
    <br>
    <div class="inputfield d-flex justify-content-center">
        <input type="text" id="total" value="0" disabled=""/>
    </div>

    <div class="d-flex justify-content-center buttons">
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Start</button>
        <button class="reload">Reset</button>
    </div>


<?php include 'includes/bottom.php';?>