# meteor-vue-test
Testing a Meteor + Vue build

To reproduce: npm install..

Issue 1 (very strange):
The **"\<style />"** tags in .vue files are interrupting the render of the component.
Logged in console the vars holding the imported components and getting \<style type="text/css">\</style> ??
If I remove the \<style> tags completely from components it renders fine

This is the logs I get for App and Home..
![image](https://cloud.githubusercontent.com/assets/12781988/21955265/18440aca-da70-11e6-8b5f-732bc3d5adc6.png)
