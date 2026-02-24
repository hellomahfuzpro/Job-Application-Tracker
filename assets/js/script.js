const jobButtons = document.querySelectorAll('.interview-button, .rejected-button, .delete');
for (const jobButton of jobButtons ){
    jobButton.addEventListener('click', updateStatus);
}

const tabButtons = document.querySelectorAll('#rejected-tab, #all-tab, #interview-tab');
for (const tabButton of tabButtons ){
    tabButton.addEventListener('click', tabsTrigger);
}

function updateStatus(event){

    const selectedButton = event.currentTarget;
    const isInterviewButton = selectedButton.classList.contains('interview-button');
    const isRejectedButton = selectedButton.classList.contains('rejected-button');
    const isDeleteButton = selectedButton.classList.contains('delete');



        let job = selectedButton.closest('.job');
        const status = job.querySelector('.job-status');

        if ( isInterviewButton){
            job.classList.remove('rejected-active');
            status.innerText = 'Interview';
            job.classList.add('interview-active');

        } else if ( isRejectedButton){

            job.classList.remove('interview-active');
            status.innerText = 'Rejected';
            job.classList.add('rejected-active');

        } else if( isDeleteButton ){

            job.remove();

        }

    updateJobListing();
}


function tabsTrigger(event){       
    
    for ( let tabButton of tabButtons){
        tabButton.classList.remove('active', 'border-0');
        tabButton.classList.add('shadow-none', 'bg-white', 'text-gray-500');
    }

    const selectedButton = event.currentTarget
    selectedButton.classList.add('active', 'bg-brand-blue','border-0');
    selectedButton.classList.remove('shadow-none', 'text-gray-500', 'bg-white');

    updateJobListing();
}

function updateJobListing(){

    const allTab = document.getElementById('all-tab');
    const interviewTab = document.getElementById('interview-tab');
    const rejectedTab = document.getElementById('rejected-tab');

    const jobs = document.querySelectorAll('.job');

    const currentActiveJobs = jobs.length;
    const currentInterviewJobs = document.querySelectorAll('.interview-active').length;
    const currentRejectedJobs =  document.querySelectorAll('.rejected-active').length;

    const setTotalStat = document.getElementById('total-number').innerText = currentActiveJobs;
    const setInterviewStat = document.getElementById('interview-number').innerText = currentInterviewJobs;
    const setRejectedStat = document.getElementById('rejected-number').innerText = currentRejectedJobs;

    const availableJobArea = document.getElementById('available-job-number');
    const jobNotFoundArea = document.getElementById('job-not-found');

    function manageNotFoundArea(length){
        if(length < 1){
            jobNotFoundArea.classList.remove('hidden');
        }else{
            jobNotFoundArea.classList.add('hidden');
        }
    }



    for (const job of jobs ){
        if(allTab.classList.contains('active')){

            job.classList.remove('hidden');


        } else if(interviewTab.classList.contains('active')){

            if(job.classList.contains('interview-active')){
                job.classList.remove('hidden');
            }else{
                job.classList.add('hidden');
            }


        } else if(rejectedTab.classList.contains('active')){

            if(job.classList.contains('rejected-active')){
                job.classList.remove('hidden');
            }else{
                job.classList.add('hidden');
            }

        }
    }

    if( allTab.classList.contains('active') ){

        availableJobArea.innerHTML = `${currentActiveJobs} jobs`;
        manageNotFoundArea(currentActiveJobs);

    }else if( interviewTab.classList.contains('active') ){

        availableJobArea.innerHTML = `${currentInterviewJobs} of ${currentActiveJobs} jobs`;
        manageNotFoundArea(currentInterviewJobs);

    }else if( rejectedTab.classList.contains('active') ){

        availableJobArea.innerHTML = `${currentRejectedJobs} of ${currentActiveJobs} jobs`;
        manageNotFoundArea(currentRejectedJobs);

    }

}
