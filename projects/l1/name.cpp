
#include <iostream>


int main() {

	std::string name;  //Holds user's name

	//Ask user for their name
	std::cout << "What is your name?" << std::endl;

	//Grabs user input from keyboard puts into variable
	std::cin >> name;

	//Outputs sentence to screen
	std::cout << "Nice to meet you, " << name << "." << std::endl;

	//0 means no error
	return 0;
}
