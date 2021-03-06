function changeVal() {
  let cur = $(this);
  let curText = cur.text();
  let input = $('<input>');
  input.val(curText);
  let parent = cur.closest('div');
  parent.prepend(input);
  cur.remove();
  input.on('blur', saveChange);
};

function saveChange() {
  let cur = $(this);
  let curText = cur.val();
  let h4Elem = $('<h4>');
  h4Elem.text(curText);
  let parent = cur.closest('div');
  parent.prepend(h4Elem);
  cur.remove();

}

function addBlock(name, email, avatar) {
  let container = $('<div>');
  let containerName = $('<div>');
  let containerEmail = $('<div>');
  let containerAvatar = $('<div>');

  let closeElem = $('<div>');
  closeElem.addClass('close');
  closeElem.text('x');
  container.append(closeElem);

  closeElem.on('click', function(){
    $(this).closest('.item').remove();
  })



  let h4_name = $('<h4>');
  let p_email = $('<p>');
  let img_avatar = $('<img>');

  containerName.append(h4_name);
  containerEmail.append(p_email);
  containerAvatar.append(img_avatar);

  container.append(containerName);
  container.append(containerEmail);
  container.append(containerAvatar);
  container.addClass('item');


  h4_name.on('dblclick', changeVal);
  h4_name.text(name);
  p_email.text(email);
  img_avatar.attr('src', avatar);
  return container;
}




$('#send').click(function (event) {
  event.preventDefault();

  let name = $('.name').val();
  let email = $('.email').val();
  let avatar = $('.avatar').val();

  $('.output').append(addBlock(name, email, avatar));
})


function getData() {
  $.ajax({
    url: 'https://reqres.in/api/users?page=2',
    success: function (data) {
        addUser(data.data[0]);
        addUser(data.data[1]);
        addUser(data.data[2]);
        addUser(data.data[3]);
        addUser(data.data[4]);
        addUser(data.data[5]);
    }
  })
}
getData();

function addUser(user) {
  let container = $('<div>');
  let containerFirst_name = $('<div>');
  let containerLast_name = $('<div>');
  let containerEmail = $('<div>')
  let containerAvatar = $('<img>');

  let closeX = $('<div>');
  closeX.addClass('close');
  closeX.text('x');
  container.append(closeX);

  closeX.on('click', function(){
    $(this).closest('.user').remove();
  })


  containerFirst_name.text(user.first_name);
  containerLast_name.text(user.last_name);
  containerEmail.text(user.email);
  containerAvatar.attr('src', user.avatar);

  container.append(containerFirst_name);
  container.append(containerLast_name);
  container.append(containerEmail);
  container.append(containerAvatar);
  container.addClass('user');

  $('.users').append(container);

}

