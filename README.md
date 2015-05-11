# Interview Problem: Kerbal CSV

This is a short interview problem that involves parsing some
[Kerbal Space Program](https://kerbalspaceprogram.com/en/)-themed
csv. It is intended to take about 1-2 hours.

The problem has a few required parts and few optional "extra-credit"
parts. If you're getting close to the 2 hour mark, just remember
that it's more important to have a clean, well-documented solution
for the required parts than it is to implement extra credit.
Only do the extra credit if you've got time to spare and you really
want to "wow" us.

You may use whatever language you're most comfortable with. At
LASP we mostly use Scala and Javascript (on our team, anyway),
so if you're familiar with either you should consider using
one, but it's more important to us that you can
write clean, idiomatic, and working code in *a* language
than it is that you already know *our* languages.

To submit a solution to this problem, pretty much any method is
OK. If you're comfortable with git and github, we encourage
you to post your code there and send us a link. If not, simply
emailing us a zip of your code is fine, too.

## Problem Definition

1. Required - Read the attached CSV file `kerbals.csv`
	* The text values are quoted, but otherwise there's nothing
	'tricky' about the csv. There are no quotes or commas in
	any of the strings. Parsing the file by splitting on
	'\n' and ',' is just fine - we're trying to keep this under
	2 hours, and we're more interested in your code than
	your ability to find a good csv library.
	* The first line is a header; it contains the names of the
	fields/columns. The rest of the lines are data.
2. Required - Print the data as JSON; an array of objects.
	* The entire output of your program should be one JSON
	array. Each object in the array should represent one
	Kerbal (CSV line). The fields of the object should be
	the column headers. I'm not picky about indentation,
	whitespace, or capitalization though.
	* This is the JSON validator I will be using:
	[jsonlint](https://github.com/zaach/jsonlint)

	For example, I will execute your program by piping
	its output to jsonlint, something like this:

	```
	./yourProgram | jsonlint
	```

	* You must provide clear instructions to build and run
	your code. I must be able to compile your code locally
	from the command line; don't just send me an executable.
	You can assume we'll be on a 'unix-y' system (our
	personal workstations are mostly OSX, and our servers
	are mostly RedHat).
	We're pretty flexible about the details here, as it
	will depend a lot on your language and build system of
	choice, but here are some rough guidelines:
		* OK - `make; ./main`
		* OK - `maven package; cd target/dist; java -jar main.jar`
		* OK - `./gradlew -q run`
		* OK - `python main.py`
		* Not OK - Making me type more than a few (3-ish) commands
		at the command prompt
		* OK - Putting those commands into a shell script so that
		I can just run `./my_build_script.sh` or something
		* Not OK - build/run instructions that involve
		Eclipse/Visual Studio/IntelliJ/etc
			* Not that we don't like IDEs (we use them every day),
			but you shouldn't assume that we use the same one you do,
			and they don't make for a very portable/scalable/automatable
			build system
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
	* Occasionally you'll come across data in real life
	that's been stored
	as a function of its 'true' value, in order to increase
	resolution in certain ranges. For example, RGB
	values in images are often stored as `sqrt(R),sqrt(G),sqrt(B)`
	to provide more granularity around smaller values. (Neat
	trivia: this is because the human perception of color is
	nonlinear - we can detect very small differences in
	shades of dark gray, but we have less granularity with brighter
	colors)
	* In this case, the 'true' values for courage and stupidity
	are percents between 0
	and 100. In an attempt to spread them around between
	-&infin; and &infin; I've first applied a linear transform
	to move the values between -PI/2 and PI/2 and then
	applied the `tan` function (yes, this is a fairly meaningless
	transform - it's just an exercise, don't worry about it too
	much). The full formula is:

	```
	tan(true_val * PI / 100.0 - (PI/2))
	```

