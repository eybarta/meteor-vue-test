# meteor-vue-test
Testing a Meteor + Vue build

To reproduce: npm install..

Issue 1 (very strange):
The <style></style> tags in .vue files are interrupting the render of the component.
Logged in console the vars holding the imported components and getting <style type="text/css"></style>??
If I remove the <style> tags completely from components, everything renders fine.
