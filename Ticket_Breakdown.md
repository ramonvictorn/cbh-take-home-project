
# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

  

- Data is saved in the database in the Facilities, Agents, and Shifts tables

- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each

- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

  

## You've been asked to work on a ticket. It reads:

  

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

  
  

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

  
  

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

  

## Your Breakdown Here

  
  

 1.  **Add facility agent id field available**

		**Description**:

		- What: We need to add the ability to each facility to save a custom id for each agent.

		- Why: Our internal database are using different id, so our id is not the same for each facility.

		- How: This new field need to be available on our system so that we can get the id used on the facility system and save it on this field.

	 -  **Time estimation**: 4 hours
	 -  **Accpetance Criteria**: 

		  - A new field called `facility_agent_id` should be added on our database on the agent table.
		  - This value is optional, so the facility is not mandatory to have this id and this field need to be string, as some facility can use numbers or string  (uuid).
		  - The function `getShiftsFacility` need to save the current facility agent id on this new field (facility agent id). This information will be available on the metadata of each Shift worked. 
		  -  Tests need to be added to cover at least cases like:
			  - id not exist on their system.
			  - id exist on their system.
 

 2. **Use the facility agent id on the report**
 
	 **Description**:
	- What: A new field called facility agent id is available and we need to use this on the report to facilitate communication.
	- Why: Our clients facility will use these values to identify each agent easily instead of using the id of our systems.
	- How: Adding this field to the report.

	 -  **Time estimation**: 6 hours
	 -  **Accpetance Criteria**: 
		 - This field should be a new column on the report, we will show your id and their id at the same time.
		 -The field `facility_agent_id` is optional so sometimes will be empty.
		 - The title of the column new will be **`<Facility name>` Agent Id**. On the `Facility name field should be used the first name of the facility, with this the client will see that this column is about their system.
		 - Later, the client will be able to control if he wants to show both ids or not, so keep it in mind.
		 
	  