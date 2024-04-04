let memberCount = 0;

function sendOTP() {
}

function addMember() {
    const form = document.getElementById('sign-in-form');

    const memberName = document.createElement('input');
    memberName.type = 'text';
    memberName.placeholder = `Member ${memberCount + 1} Name`;
    memberName.required = true;

    const memberProfile = document.createElement('input');
    memberProfile.type = 'file';
    memberProfile.accept = 'image/*';
    memberProfile.placeholder = `Member ${memberCount + 1} Profile Image`;

    const memberCover = document.createElement('input');
    memberCover.type = 'file';
    memberCover.accept = 'image/*';
    memberCover.placeholder = `Member ${memberCount + 1} Cover Image`;

    form.insertBefore(memberName, form.childNodes[form.childNodes.length - 2]);
    form.insertBefore(memberProfile, form.childNodes[form.childNodes.length - 2]);
    form.insertBefore(memberCover, form.childNodes[form.childNodes.length - 2]);

    memberCount++;
}
