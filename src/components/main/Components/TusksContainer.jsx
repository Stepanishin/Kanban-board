import React, { useState } from 'react';
import ButtonAdd from './ChangeStatusContainer';
import Card from './Card';
import DropDown from './DropDown';
import InputAddTusk from './InputAddTusk';

const TusksContainer = () => {


    const [tusks, setTusks] = useState([
        {id: 1, title: 'Clean the room', status: 'Backlog' },
        // {id: 1, title: 'Clean the room', status: 'Backlog' },
        // {id: 2, title: 'Put the waste', status: 'Backlog' },
        // {id: 3, title: 'eat the dog', status: 'Ready' },
        // {id: 4, title: 'eat the cat', status: 'Backlog' },
    ])

    const [buttonSubmit, setButtonSubmit] = useState('')

    const addButtonSubmit = (e) => {
        e.preventDefault()
    
        let btnSubmit = document.querySelector('.ButtonSubmit')
        let placeholder = document.querySelector('.PlaceholderAdd')
        let btnAdd = document.querySelector('.ButtonAdd')

        btnSubmit.style.display = "block"
        placeholder.style.display = "block"
        btnAdd.style.display = "none"

 
        setButtonSubmit('')
    }

    const [title, setTitle] = useState('')


    const addNewCard = (e) => {
        e.preventDefault()
        

        if (title == '') {
            alert('Please write the name of the task')
        } else {

        const newTask = {
          id:Date.now(),
          title,
          status: 'Backlog'
        }

        let btnSubmit = document.querySelector('.ButtonSubmit')
        let placeholder = document.querySelector('.PlaceholderAdd')
        let btnAdd = document.querySelector('.ButtonAdd')

        btnSubmit.style.display = "none"
        placeholder.style.display = "none"
        btnAdd.style.display = "block"

        //////////////////////////////
        let ButtonAddReady = document.querySelector('.ButtonAddReady')
        ButtonAddReady.removeAttribute('disabled', false)
        //////////////////////////////

        setTusks([...tusks, newTask])
        setTitle('')
        // let ButtonAddReady = document.querySelector('.ButtonAddReady')
        // if (tusks.filter(tusk => tusk.status == 'Backlog').length == 0) {
        //     ButtonAddReady.setAttribute('disabled')
        // } else {
        //     ButtonAddReady.removeAttribute('disabled')
        // }

    }
    }

    const changeStatusBacklog = (item) => {
        
        tusks.forEach(element => {
            if (item.target.id == element.id) {
                element.status = 'Ready'              
            }
        })  

        let newTusksList = document.querySelector('.DropDownReady')
        newTusksList.style.display = "none"

        ////////////////////////////////
        let ButtonAddReady = document.querySelector('.ButtonAddReady')
        if (tusks.filter(tusk => tusk.status == 'Backlog').length == 0) {
            ButtonAddReady.setAttribute('disabled', true)
        } else {
            ButtonAddReady.removeAttribute('disabled', false)
        }
        ///////////////////////////////
        //////////////////////////////
        let ButtonAddInProgress = document.querySelector('.ButtonAddInProgress')
        ButtonAddInProgress.removeAttribute('disabled', false)
        //////////////////////////////

       setTusks([...tusks])     
    }

    const changeStatusInProgress = (item) => {        
        tusks.forEach(element => {
            if (item.target.id == element.id) {
                element.status = 'In Progress'  
            }
        })  

        let newTusksList = document.querySelector('.DropDownInProgress')
        newTusksList.style.display = "none"

        ////////////////////////////////
        let ButtonAddReady = document.querySelector('.ButtonAddInProgress')
        if (tusks.filter(tusk => tusk.status == 'Ready').length == 0) {
            ButtonAddReady.setAttribute('disabled', true)
        } else {
            ButtonAddReady.removeAttribute('disabled', false)
        }
        ///////////////////////////////
        let ButtonAddFinished = document.querySelector('.ButtonAddFinished')
        ButtonAddFinished.removeAttribute('disabled', false)
        //////////////////////////////

        setTusks([...tusks])     
    }

    const changeStatusFinished = (item) => {        
        tusks.forEach(element => {
            if (item.target.id == element.id) {
                element.status = 'Finished'   
            }
        })  

        let newTusksList = document.querySelector('.DropDownFinished')
        newTusksList.style.display = "none"

        ////////////////////////////////
        let ButtonAddFinished = document.querySelector('.ButtonAddFinished')
        if (tusks.filter(tusk => tusk.status == 'In Progress').length == 0) {
            ButtonAddFinished.setAttribute('disabled', true)
        } else {
            ButtonAddFinished.removeAttribute('disabled', false)
        }
        ///////////////////////////////        

        setTusks([...tusks])     
    }

    const showTusksBacklog = (e) => {
        console.log('huy')
        e.preventDefault()
        let newTusksList = document.querySelector('.DropDownReady')

        newTusksList.style.display = "block"
        
    }

    const showTusksReady = (e) => {
        e.preventDefault()
        let newTusksList = document.querySelector('.DropDownInProgress')
        newTusksList.style.display = "block"
    }

    const showTusksInProgress = (e) => {
        e.preventDefault()
        let newTusksList = document.querySelector('.DropDownFinished')
        newTusksList.style.display = "block"
    }

    ///////Делаю кнопки добавления задач disabled///////////
    // let buttonState = function () {
    //     let ButtonAddReady = document.querySelector('.ButtonAddReady')
    //     let ButtonAddInProgress = document.querySelector('.ButtonAddInProgress')
    //     let ButtonAddFinished = document.querySelector('.ButtonAddFinished')

    //     console.log(ButtonAddFinished)

    //     // ButtonAddFinished.setAttribute("disabled");
    //     console.log('huy')
    // }

    // let ButtonAddReady = document.querySelector('.ButtonAddReady')
    // console.log(ButtonAddReady)

    // document.onclick = function(e)
    // {
	//     if(e.target == ButtonAddReady)
	//     {
	//     	ButtonAddReady.removeAttribute("disabled");
	//     }
    // };

    






    const TusksContainers = [
        {
            id: 1, title: 'Backlog',
            cards: tusks.filter(ready => ready.status == 'Backlog').map(tusk => <Card key={tusk.id} tusk={tusk} />), 
            input: <InputAddTusk className="PlaceholderAdd" value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Add new tusk" />, 
            buttonAdd: <ButtonAdd className="ButtonAdd" onClick={addButtonSubmit}>+ Add Card</ButtonAdd>, 
            buttonSubmit: <ButtonAdd className="ButtonSubmit" onClick={addNewCard}>Submit</ButtonAdd>, 
        },
        {
            id: 2, title: 'Ready',
            cards: tusks.filter(ready => ready.status == 'Ready').map(tusk => <Card key={tusk.id} tusk={tusk} />), 
            buttonDropDown: <ButtonAdd disabled className="ButtonAdd ButtonAddReady" onClick={showTusksBacklog}>+ Add Card</ButtonAdd>,
            DropDown: <DropDown className="DropDownReady" tusk={tusks} changeStatus={changeStatusBacklog} status='Backlog'></DropDown>
        },
        {
            id: 3, title: 'In Progress',
            cards: tusks.filter(ready => ready.status == 'In Progress').map(tusk => <Card key={tusk.id} tusk={tusk} />),
            buttonDropDown: <ButtonAdd disabled className="ButtonAdd ButtonAddInProgress" onClick={showTusksReady}>+ Add Card</ButtonAdd>,
            DropDown: <DropDown className="DropDownInProgress" tusk={tusks} changeStatus={changeStatusInProgress} status='Ready'></DropDown> 
        },
        {
            id: 4, title: 'Finished',
            cards: tusks.filter(ready => ready.status == 'Finished').map(tusk => <Card key={tusk.id} tusk={tusk} />), 
            buttonDropDown: <ButtonAdd disabled className="ButtonAdd ButtonAddFinished" onClick={showTusksInProgress}>+ Add Card</ButtonAdd>,
            DropDown: <DropDown className="DropDownFinished" tusk={tusks} changeStatus={changeStatusFinished} status='In Progress'></DropDown> 
        },
      ]

      

    return (
        <div className="TusksContainers__wrap">

            {TusksContainers.map(container => 
                <div key={container.id} className="TusksContainers__List">

                    <h2>{container.title}</h2>
                    <div className="TusksContainers__Card">{container.cards}</div>
                    <div className="TusksContainers__form">
                        {container.input}
                        {container.buttonAdd}
                        {container.buttonSubmit}
                        {container.buttonDropDown}
                        {container.DropDown}
                    </div>

                </div>)}
            
                
        </div>
    );

    
};

export default TusksContainer;