# Interview Problem: Kerbal CSV

This is a short interview problem that involves parsing some
[Kerbal Space Program-themed](https://kerbalspaceprogram.com/en/)
csv. It is intended to take about 1-2 hours.

The problem has a few required parts and few optional "extra-credit"
parts. If you're getting close to the 2 hour mark, just remember
that it's more important to have a clean, well-documented solution
for the required parts than it is to implement extra credit.
Only do the extra credit if you've got time to spare and you really
want to "wow" us.

You may use whatever language you're most comfortable with. At
LASP we mostly use Scala and Javascript (on our team, anyway),
so if you're familiar with them I'd consider giving them a whirl,
but it's more important to have clean, idiomatic, working code
than it is to use any particular language.

To submit a solution to this problem, pretty much any method is
OK. If you're comfortable with git and github, we encourage
you to post your code there and send us a link. If not, simply
emailing us a zip of your code is fine, too.

## Problem Definition

1. Required - Read the attached CSV file `kerbals.csv`
	* The text values are quoted, but otherwise there's nothing
	'tricky' about the csv. There are no quotes or commas in
	any of the strings. Parsing the file by splitting on
	'\n' and ',' is just fine - we're not testing your ability
	to look up a really great csv library.
	* The first line is a header; it contains the names of the
	fields/columns. The rest of the lines are data.
2. Required - Print the data as JSON; an array of objects.
	* Code should be easy to run from the command line. You've
	got a little flexibility here depending on your language
	and build system of choice, but here are some rough
	guidelines:
		* OK - `make; ./main`
		* OK - `maven package; cd target/dist; java -jar main.jar`
		* OK - `./gradlew -q run`
		* OK - `python main.py`
		* Not OK - More than a few lines of human-executed terminal
		code
		* OK - Putting those lines into a shell script so that
		the human only has to run `./my_build_script.sh`
		* Not OK - "To run, click the 'Run' button in Eclipse/IntelliJ/Visual Studio"
			* Not that we don't like IDEs, but you shouldn't
			assume that we use the same one you do.
3. Optional - Add an option to print the data as XML
	* You should be able to pass a parameter to the program via
	the command line. Again the format is flexible, but we're
	expecting something like `make; ./main xml` or
	`./gradlew -Poutput=xml run`
	* The exact XML format is up to you; as long as it's valid
	and readable it's just fine.
4. Optional - Apply a transform to the 'Courage' and 'Stupidity'
columns after they've been read, and before they've been
displayed.
	* The values in the csv file are a function of their 'true'
	values. This is done occasionally in real life to provide
	higher resolution in certain ranges. For example, RGB
	values in images are often stored as `sqrt(R),sqrt(G),sqrt(B)`
	to provide more granularity around smaller values.